import Button from "./Product/Button.jsx";
import NumberInput from "./Product/NumberInput.jsx";
import Images from "./Product/Images.jsx";
import Title from "./Product/Title.jsx";

export default function Product() {
    return (
        <div className="grid grid-cols-2 w-full max-w-screen-xl mx-auto px-4 py-16 gap-16">
            <Images />

            <div>
                <Title text="Meu sofá" />
                <p className="text-2xl text-neutral-400 pt-2">
                    R$ 2.500,00
                </p>

                <div className="flex gap-16 divide-x divide-black py-4">
                    <span>stars</span>
                    <span className="pl-4">5 Customers Reviews</span>
                </div>

                <p className="py-6">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>

                <div className="flex flex-wrap">
                    <label htmlFor="size" className="w-full">Size</label>
                    <input type="radio" name="size" id="size"/>
                    <input type="radio" name="size" id="size"/>
                    <input type="radio" name="size" id="size"/>
                </div>

                <div className="flex gap-4 pt-8">
                    <NumberInput />
                    <Button text="Add to Cart" />
                    <Button text="+ Compare" />
                </div>
            </div>
        </div>
    )
}