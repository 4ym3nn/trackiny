import {
    Card,
    CardContent,

    CardHeader,
    CardTitle
} from "@/components/ui/card"
interface CardUserProps {
    icon:  React.ReactNode,
    title: string,
    text: string,
}
export const CardUser = ({ title, text, icon }: CardUserProps) => {
    return <Card className="w-fit  h-fit bg-white shadow-md rounded-lg p-4">
        <CardHeader>
            <CardTitle className="flex flex-row gap-4 items-center">{icon}
                <span className="text-neutral-950 text-2xl font-semibold  leading-[28.80px]">
                    {title}
                    </span>
                    </CardTitle>

        </CardHeader>
        <CardContent>
            <p>{text}</p>
        </CardContent>

    </Card>

}
export default CardUser;
