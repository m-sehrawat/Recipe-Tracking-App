import { RecipeInput } from "./RecipeInput";
import { RecipeCard } from "./RecipeCard";

export const Recipe = () => {
    return (
        <div className='mainBox'>
            <div className="container">
                <div className="row">
                    <div className="col boxHeightTop">
                        <RecipeInput />
                    </div>
                    <div className="col boxHeightTop cardBox">
                        <RecipeCard />
                    </div>
                </div>
                <div className="row boxHeightBottom">3</div>
            </div>
        </div>
    )
}