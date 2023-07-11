import {useNavigate} from "react-router-dom";

export default function SecondPage() {
    const navigate = useNavigate();
    
    return (
        <>
            <h1>The second page</h1>
            <button type="button" onClick={() => navigate(-1)}>Back</button>
        </>
    );
}
