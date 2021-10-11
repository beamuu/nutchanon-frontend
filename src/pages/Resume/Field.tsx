interface IField {
    topic: string;
    children: any;
}
export default function Field({ topic, children }: IField) {
    return (   
        <div className="row m-0 my-4">
            <div className="col-lg-3">
                <h6>{topic}</h6>
            </div>
            <div className="col-lg-9">
                {children}
            </div>
        </div>
    )
}