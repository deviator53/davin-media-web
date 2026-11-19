export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Safe: data is built from our own constants, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
