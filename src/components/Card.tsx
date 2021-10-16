import { useHistory } from "react-router"
import { color } from "../colors";

interface ICard {
    title?: string
    description?: string
    path?: string
    icon?: any
    onClick?: () => void
}

export default function Card({ title, description, path, icon, onClick }: ICard) {
    const history = useHistory();
    return (
        <div className="card" onClick={onClick ? onClick : path ? () => history.push(path) : () => {}}>
            <div>
                {icon}
                <h6 className="my-4 ">{title}</h6>
                <p style={{ color: "#798991", fontSize: "14px" }}>{description}</p>
            </div>
            <p className="n discover">Discover More {">"}</p>
        </div>
    )
}