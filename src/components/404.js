const ErrorPage = ({children}) => {
	return (
    <section>
      <h3 className="no-articles">No such page found</h3>
      {children && <h3 className="no-articles">{children}</h3>}
    </section>
  );
}

export default ErrorPage;