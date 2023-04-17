export const Logout=({ isLoaded,setIsLoaded }: any ) => {
    const handleClick = (event: any) => {
        event.preventDefault();
        setIsLoaded(false);
      };
    return (
        <button onClick={handleClick} className="button logout__submit">
            <span className="button__text">Log Out</span>
            <i className="button__icon fas fa-chevron-right"></i>
          </button>
    )
}