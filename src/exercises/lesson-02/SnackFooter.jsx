// Default export a small component that returns a fun footer message.

export default function SnackFooter(){
    const footerMessage = "P.S. Hot Take! These are the best snacks that ever exist! :P";
    return (
        <footer>
            <p>{footerMessage}</p>
        </footer>
    );
};