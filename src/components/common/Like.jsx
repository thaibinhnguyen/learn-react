import React from "react";

// Input: liked: boolean
// Output: onClick

export default function Like({ liked, onLike }) {
    let classes = "fa fa-heart";
    if (!liked) classes += "-o";
    return (
        <i
            onClick={onLike}
            style={{ cursor: "pointer" }}
            className={classes}
            aria-hidden="true"
        ></i>
    );
}
