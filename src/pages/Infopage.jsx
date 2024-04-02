import { useParams } from "react-router-dom"
import data from "../mock.json"
import "../App.css"
export default function Infopage() {
  const params = useParams();
  const info = data[params.id]
  console.log(info.platforms)
  return (
    <div className="infopage">
      <div className="infopageContainer">
        <div className="infotitle"><span className="infopageTitle">{info.name}</span></div>
        <div className="infopara">

          <h4>Minimum Requirements</h4>
          {info.platforms.map((item) => (
            <p>
              Was released in {item.platform.name} on {item.released_at}
              <br />
              Minimum Requirements: {`${item.requirements_en?.minimum || "none"}`}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

