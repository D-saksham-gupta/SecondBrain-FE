export function Input({
  reference,
  placeholder,
}: {
  placeholder: string;
  reference?: any;
}) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="px-4 py-2 border rounded m-2 w-96"
        ref={reference}
      />
    </div>
  );
}
