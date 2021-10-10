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
            <div style={{ maxWidth: "100%" }}>
                <div className="my-4">
                    {icon}
                </div>
                <h5>{title}</h5>

                <p className="text-truncate d-block" style={{ color: color }}>{description}</p>

                <p className="n my-3">Discover More {">"}</p>
            </div>
        </div>
    )
}