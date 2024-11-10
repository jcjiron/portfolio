import { TextareaHTMLAttributes, ReactNode } from "react";

export interface TextareaType extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    label: string;
    textContainerPlaceholder?: string;
    children?: ReactNode; // Permite contenido adicional dentro del textarea
}

const TextArea = ({
    className = "",
    label,
    textContainerPlaceholder,
    children,
    ...props
}: TextareaType) => {
    return (
        <div
            className={`self-stretch flex flex-col items-start justify-center gap-[4px] min-w-[230px] text-left text-sm text-whitesmoke-100 font-merriweather ${className}`}
        >
            <label className="self-stretch relative leading-[160%]">{label}</label>
            <div className="self-stretch rounded-lg bg-white flex flex-row items-center justify-start py-[15px] px-4 border-[1px] border-solid border-gainsboro">
                <textarea
                    name={props.name}
                    className="w-full h-full [border:none] [outline:none] bg-[transparent] flex flex-row items-start justify-start py-0 px-1 box-border font-merriweather text-sm text-dimgray resize-none"
                    placeholder={textContainerPlaceholder}
                    rows={4}
                    cols={50}
                    {...props}
                >
                    {children}
                </textarea>
            </div>
        </div>
    );
};

export default TextArea;
