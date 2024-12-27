interface PropsApresentationItem {
  ItemTitle: string,
  ItemDescription: string
}

export function ApresentationItem({ ItemDescription, ItemTitle } : PropsApresentationItem) {
  return (
    <div className="feature-card text-center">
      <h3 className="text-xl font-semibold mb-4">{ItemTitle}</h3>
      <p>{ItemDescription}</p>
    </div>
  );
}