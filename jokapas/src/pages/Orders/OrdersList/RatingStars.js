import "./ratingStars.css"
export function RatingStars({rating}){
    return(
        <>
            {(() => {
            const arr = [];
                for (let i = 0; i < rating; i++) {
                    arr.push(
                        <img className="star-img" src="starFull.png" key={i}/>
                    );
                }
            return arr;
            })()}
            {(() => {
            const arr = [];
                for (let i = 0; i < 5-rating; i++) {
                    arr.push(
                        <img className="star-img" src="starEmpty.png" key={i}/>
                    );
                }
            return arr;
            })()}
            <span>(50 vélemény)</span>
        </>
    )
}