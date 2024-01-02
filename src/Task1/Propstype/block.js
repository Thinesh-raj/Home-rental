import "./block.css"

function Block(p) {
    return <div className="outer">
        <div className="inner">
            <div className="blkimg">
                <img src={p.img} />
            </div>
            <h5>{p.title}</h5>
            <p>123 Properties</p>
        </div>
    </div>
}
export default Block