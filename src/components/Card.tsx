import { useHistory } from "react-router"
import { color } from "../colors";

interface ICard {
    title?: string
    description?: string
    path: string
    icon?: any
}

export default function Card({ title, description, path, icon }: ICard) {
    const history = useHistory();
    return (
        <div className="card" onClick={() => history.push(path)}>
            <div>
                {icon}
                <h6 className="my-4 ">{title}</h6>
                <p style={{ color: "#798991", fontSize: "14px" }}>{description}</p>
            </div>
            <p className="n discover">Discover More {">"}</p>
        </div>
    )
}