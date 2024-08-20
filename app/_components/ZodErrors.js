export function ZodErrors({ error }) {
  if (!error) return null;
  return error.map((err, index) => (
    <p key={index} className='text-red-500 text-xs mx-5 py-2'>
      {err}
    </p>
  ));
}
