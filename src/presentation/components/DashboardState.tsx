interface DashboardStateProps {
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function DashboardState({
  title,
  message,
  actionLabel,
  onAction,
}: DashboardStateProps) {
  return (
    <main className="shell loading-shell">
      <section className="loading-card">
        <p className="eyebrow">EduFin</p>
        <h1>{title}</h1>
        <p>{message}</p>
        {actionLabel && onAction ? (
          <button className="primary-action" type="button" onClick={onAction}>
            {actionLabel}
          </button>
        ) : null}
      </section>
    </main>
  );
}
