import { Panel } from "@/components/ui/Panel";
import { MonoLabel } from "@/components/ui/MonoLabel";
import { identityPanel } from "@/content/profile";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-[var(--hairline-soft)] last:border-b-0" style={{ padding: "16px 22px" }}>
      <MonoLabel className="mb-1.5">{label}</MonoLabel>
      <div className="text-[15px] text-neutral-200">{children}</div>
    </div>
  );
}

export function IdentityPanel() {
  return (
    <Panel className="p-0">
      <div className="flex items-center justify-between border-b border-[var(--hairline)] px-5 py-3.5">
        <span className="font-mono text-[11px] tracking-[0.18em] text-neutral-300">
          {identityPanel.title}
        </span>
        <span className="font-mono text-[11px] text-neutral-700">{identityPanel.id}</span>
      </div>
      <Row label="ROLE">{identityPanel.role}</Row>
      <Row label="EXPERIENCE">{identityPanel.experience}</Row>
      <Row label="SPECIALIZATION">{identityPanel.specialization}</Row>
      <Row label="FOCUS">{identityPanel.focus}</Row>
      <Row label="CURRENTLY">
        <div>{identityPanel.currently[0]}</div>
        <div className="text-neutral-500">{identityPanel.currently[1]}</div>
      </Row>
      <Row label="LANGUAGES">{identityPanel.languages}</Row>
    </Panel>
  );
}
