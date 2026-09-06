export function CornerBrackets() {
  return (
    <>
      <span
        aria-hidden="true"
        className="border-accent pointer-events-none absolute -top-px -left-px h-3 w-3 border-t border-l"
      />
      <span
        aria-hidden="true"
        className="border-accent pointer-events-none absolute -right-px -bottom-px h-3 w-3 border-r border-b"
      />
    </>
  );
}
