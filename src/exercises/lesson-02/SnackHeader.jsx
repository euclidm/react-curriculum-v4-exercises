// Default export a simple component that returns the app heading.

export default function SnackHeader(){
    const header = "Snack List";
    return (
        <div>
            <h1>{header}</h1>
        </div>
    );
};