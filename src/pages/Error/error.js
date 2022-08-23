import React from "react";
import {} from "./styles.css";

export function Error( {error} ) {
    return (
        <div className="error">
            <div>Opps, something wrong!</div>
            <div className="errorType">{error.type}</div>
            <div className="errorContent">{error.content}</div>
        </div>
    )
}