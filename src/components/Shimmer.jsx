const Shimmer = () => {
    return (
        <div className="restaurant-list">
            {
                Array(10).fill("").map((e, index) => (
                    <div className="shimmer-card" key={index} />
                ))
            }
        </div>
    );
};

export default Shimmer;