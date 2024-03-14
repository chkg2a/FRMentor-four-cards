import Card from "./Card"
import Heading from "./Heading"
import image1 from "./assets/images/icon-supervisor.svg"
import image2 from "./assets/images/icon-team-builder.svg"
import image3 from "./assets/images/icon-karma.svg"
import image4 from "./assets/images/icon-calculator.svg"
function App() {

  return (
    <div className="box-container">
      <div className="container">
        <Heading/>
        <div className="card-container">
          <Card className="card card-1" image={image1} heading="Supervisor" paragraph="Monitors activity to identify project roadblocks"/>
          <Card className="card card-2" image={image2} heading="Team Builder" paragraph="Scans our talent network to create the optimal team for your project"/>
          <Card className="card card-3" image={image3} heading="Karma" paragraph="Regularly evaluates our talents to ensure quality"/>
          <Card className="card card-4" image={image4} heading="Calculator" paragraph="Uses data from past projects to provide better delivery estimates"/>
        </div>
      </div>
    </div>
  )
}

export default App

