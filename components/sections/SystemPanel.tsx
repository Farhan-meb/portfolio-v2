import { Panel } from "@/components/ui/Panel";
import { systemPanel } from "@/content/hero";

export function SystemPanel() {
  return (
    <Panel corners className="p-0">
      <div className="flex items-center justify-between border-b border-[var(--hairline)] px-5 py-3.5">
        <span className="font-mono text-[11px] tracking-[0.18em] text-neutral-300">SYSTEM</span>
        <span className="font-mono text-[11px] text-neutral-700">{systemPanel.id}</span>
      </div>
      <dl className="px-5 py-4">
        {systemPanel.rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between py-1.5">
            <dt className="font-mono text-xs text-neutral-600">{row.label}</dt>
            <dd className="flex items-center gap-2 font-mono text-xs text-neutral-200">
              {row.live ? (
                <>
                  <span
                    aria-hidden="true"
                    className="animate-pulse-dot bg-term h-[5px] w-[5px] rounded-full"
                  />
                  <span className="text-term">{row.value}</span>
                </>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Panel>
  );
}
