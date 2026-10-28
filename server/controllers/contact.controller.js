import { sendContactEmail } from '../services/email.service.js';
import { saveToSheet, isSheetConfigured } from '../services/sheet.service.js';

// Sheet configured ho to lead sheet me jati hai (mail Apps Script bhejti hai).
// Sheet fail ho to SMTP mail fallback, taaki lead kabhi na khoye.
export async function submitContact(req, res, next) {
  try {
    const data = req.validated;
    const sheetOn = isSheetConfigured();

    if (sheetOn) {
      try {
        await saveToSheet(data);
        return res.json({ success: true, message: 'Message sent successfully' });
      } catch (err) {
        console.error('[sheet] save failed, SMTP fallback try karunga:', err.message);
      }
    }

    const mail = await sendContactEmail(data);
    if (sheetOn && mail && mail.logged) {
      // sheet bhi fail aur SMTP bhi configured nahi -> lead kahin nahi gayi
      const e = new Error('Lead could not be saved (sheet failed and SMTP not configured)');
      e.status = 502;
      throw e;
    }
    res.json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    next(err);
  }
}
