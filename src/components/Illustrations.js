import position from "../images/undraw_posting_photo.svg"

function Illustrations() {
  return (
        <div>
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src={position} alt="..." />
            </div>
            <p>Add some quality, svg illustrations to your project courtesy of <a
                    target="_blank" rel="noopener noreferrer nofollow" href="https://undraw.co/">unDraw</a>, a
                constantly updated collection of beautiful svg images that you can use
                completely free and without attribution!</p>
            <a target="_blank" rel="noopener noreferrer nofollow" href="https://undraw.co/">Browse Illustrations on
                unDraw &rarr;</a>
        </div>
  )
}

export default Illustrations;
