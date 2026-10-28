import { Component } from "react";
import DeveloperShowcase from "./DeveloperShowcase";
import { DEVELOPERS, getDevelopersByPath } from "../../data/developers";

// Error aaye to page blank nahi hoga -> purana section dikhega + dev me error box
class ShowcaseBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error, info) { console.error("[DeveloperShowcase]", error, info?.componentStack); }
  render() {
    if (this.state.error) {
      return (
        <>
          {import.meta.env.DEV && (
            <div style={{ background: "#7f1d1d", color: "#fff", padding: 12, fontSize: 12, whiteSpace: "pre-wrap", margin: 12, borderRadius: 8 }}>
              DeveloperShowcase error: {String(this.state.error?.message || this.state.error)}
            </div>
          )}
          {this.props.fallback}
        </>
      );
    }
    return this.props.children;
  }
}

export default function DeveloperShowcaseAuto({ tech, children = null }) {
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  const data = tech ? DEVELOPERS[tech] : getDevelopersByPath(path);
  if (!data?.devs?.length) return children;
  return (
    <ShowcaseBoundary key={data.imageDir} fallback={children}>
      <DeveloperShowcase data={data} />
    </ShowcaseBoundary>
  );
}
