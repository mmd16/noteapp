import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "blue",
    };
    // You can add any UI inside Loading, including a Skeleton.
    return <ClipLoader
        color={"#0096C7"}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
}