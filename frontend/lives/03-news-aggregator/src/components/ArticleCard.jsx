import { IoArrowRedo, IoBookmarks, IoTrashBin } from "react-icons/io5";
import RoundedButton from "./RoundedButton.jsx";

export default function ArticleCard({id, layout}) {
    const imageClasses = layout !== "small" ? "size-32" : "w-20 h-24";
    const titleClasses = layout !== "small" ? "text-lg mb-1 line-clamp-1" : "text-base line-clamp-1";
    const descClasses = layout !== "small" ? "text-sm line-clamp-3" : "text-xs line-clamp-2 mb-1";
    const metaClasses = layout !== "small" ? "" : "flex-col";
    const ButtonIcon = layout !== "small" ? IoBookmarks : IoTrashBin;
    const saveButtonColor = layout !== "small" ? "bg-blue-700" : "bg-red-700";
    const saveButtonText  = layout !== "small" ? "Salvar" : "Excluir";

    return (
        <a href="#" className="border rounded p-4 flex gap-4 bg-neutral-100 hover:bg-neutral-200 relative">
            <img
                src={"//lorempixel.com.br/128/128/?" + id}
                alt=""
                className={"block rounded " + imageClasses}
            />

            <div className="flex flex-col">
                <h3 className={"font-semibold " + titleClasses}>
                    Lorem ipsum dolor sit amets
                </h3>

                <p className={descClasses}>
                    Alias deserunt eligendi esse exercitationem impedit ipsum, itaque iusto laudantium molestiae neque
                    officia, praesentium quidem quod repudiandae sint sit soluta ut veritatis.
                </p>

                <div className={"flex justify-between text-xs mt-auto " + metaClasses}>
                    <p><span className="font-semibold">Fonte:</span> ESPN</p>
                    <p><span className="font-semibold">Categoria:</span> Sports</p>
                </div>
            </div>

            <RoundedButton className={"right-7 group absolute " + saveButtonColor} tooltip={saveButtonText}>
                <ButtonIcon className="size-3" color="#fff"/>
            </RoundedButton>

            <RoundedButton className="bg-emerald-700 -right-1 group absolute" tooltip="Ler">
                <IoArrowRedo className="size-3" color="#fff"/>
            </RoundedButton>
        </a>
    )
}
