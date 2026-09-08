/**
 * Every page opens with its shell path, matching the brand in the nav — it
 * says where you are rather than decorating the heading.
 */
export default function PageHeader({ path, title, intro }) {
  return (
    <>
      <p className="page-path">~/{path}</p>
      <h1 className="page-title">{title}</h1>
      {intro && <p className="page-intro">{intro}</p>}
    </>
  )
}
