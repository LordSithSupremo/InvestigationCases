import React from "react";
import CardCases from "./CardCases";

const Cases = () => {
    const cases = [
        {
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
        description: "Case 1 description",
        },
        {
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
        description: "Case 2 description",
        },
        {
        images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
        description: "Case 3 description",
        },
    ];
    
    return (
        <section className="cases">
        {cases.map((caseItem, index) => (
            <CardCases key={index} images={caseItem.images} description={caseItem.description} />
        ))}
        </section>
    );
}

export default Cases;