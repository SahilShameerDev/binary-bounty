import React, { useState } from "react";
import "./t4.css";
import { useNavigate } from "react-router-dom";
function PdfDecode() {
  const [formData, setFormData] = useState("");
  const navigate = useNavigate();
  const handleClueClick = () => {
      localStorage.setItem("clueTask6", "Y");
      alert("✅ Key 'Y' stored! You can now proceed.");
  };
  const handleSubmit = () => {
    //handle the firebase integration and verfiy with user answer
    if (formData == "you_got_key=1") {
      var userInput=prompt("You Got What... ?")
      if(userInput=="1"){
        handleClueClick()
        navigate("/morse-t7");
      }else{
        alert("Nop!!!!!!")
      }

    } else {
      alert("Not Correct!!!!!!!");
    }
  };
  function handledownload() {
    alert("twist twist");
    const pdfUrl = "../pdffolder/t4.pdf";
    console.log("Downloading PDF from:", pdfUrl);

    fetch(pdfUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.blob();
      })
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "t4.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error("Error downloading the PDF:", error));
  }
  return (
    <div>
      <h1>Task 4</h1>
      <h1>The Evolution of Technology: Shaping the Future</h1>
      <p>
        Technology has been the driving force behind human progress for
        centuries. From the invention of the{" "}
        <span class="prank-class">wheel</span> to the development of{" "}
        <span class="prank-class">artificial intelligence</span>, each
        advancement has transformed the way we{" "}
        <span class="prank-class">live</span>,{" "}
        <span class="prank-class">work</span>, and{" "}
        <span class="prank-class">interact</span>. The digital age has
        accelerated this transformation, making technology an inseparable part
        of our daily <span class="prank-class">lives</span>. The journey of
        technology began with simple <span class="prank-class">tools</span> used
        by early humans to <span class="prank-class">hunt</span> and{" "}
        <span class="prank-class">gather</span> food. Over time, discoveries
        such as <span class="prank-class">fire</span>, the{" "}
        <span class="prank-class">printing press</span>, and{" "}
        <span class="prank-class">electricity</span> laid the foundation for
        modern civilization. The{" "}
        <span class="prank-class">Industrial Revolution</span> further propelled
        technological advancements, introducing{" "}
        <span class="prank-class">machinery</span> that increased{" "}
        <span class="prank-class">production</span> and{" "}
        <span class="prank-class">efficiency</span> in industries. The 20th
        century saw rapid technological evolution with the invention of the{" "}
        <span class="prank-class">telephone</span>,{" "}
        <span class="prank-class">radio</span>, and{" "}
        <span class="prank-class">television</span>. However, it was the
        emergence of <span class="prank-class">computers</span> and the{" "}
        <span class="prank-class">internet</span> that truly revolutionized the
        world. <span class="prank-class">Computers</span> evolved from{" "}
        <span class="prank-class">room-sized machines</span> to compact devices
        that now fit in the palm of our hands. The{" "}
        <span class="prank-class">internet</span> connected people globally,
        allowing <span class="prank-class">instant communication</span> and
        access to <span class="prank-class">information</span>. With the rise of{" "}
        <span class="prank-class">smartphones</span>, technology became even
        more integrated into everyday <span class="prank-class">life</span>.
        These pocket-sized devices are now capable of performing tasks that were
        once unimaginable, from <span class="prank-class">video calling</span>{" "}
        across continents to <span class="prank-class">managing finances</span>{" "}
        and even <span class="prank-class">monitoring health</span>.{" "}
        <span class="prank-class">Social media platforms</span> emerged,
        transforming the way people <span class="prank-class">communicate</span>
        , <span class="prank-class">share ideas</span>, and{" "}
        <span class="prank-class">consume content</span>.
        <span class="prank-class">Artificial intelligence</span> and{" "}
        <span class="prank-class">machine learning</span> have further pushed
        the boundaries of what technology can achieve.{" "}
        <span class="prank-class">AI-powered applications</span> are now capable
        of analyzing massive amounts of <span class="prank-class">data</span>,
        automating <span class="prank-class">processes</span>, and even
        predicting <span class="prank-class">future trends</span>. From{" "}
        <span class="prank-class">virtual assistants</span> to{" "}
        <span class="prank-class">self-driving cars</span>,{" "}
        <span class="prank-class">AI</span> is reshaping industries such as{" "}
        <span class="prank-class">healthcare</span>,{" "}
        <span class="prank-class">finance</span>, and{" "}
        <span class="prank-class">entertainment</span> and{" "}
        <span
          onClick={() => {
            handledownload();
          }}
          class="prank-c1ass"
        >
          pdf
        </span>
        . The concept of the <span class="prank-class">Internet of Things</span>{" "}
        (<span class="prank-class">IoT</span>) has introduced a new era where{" "}
        <span class="prank-class">devices</span> communicate with each other.{" "}
        <span class="prank-class">Smart homes</span>,{" "}
        <span class="prank-class">wearable fitness trackers</span>, and{" "}
        <span class="prank-class">connected vehicles</span> are just a few
        examples of how <span class="prank-class">IoT</span> is enhancing{" "}
        <span class="prank-class">convenience</span> and{" "}
        <span class="prank-class">efficiency</span>.{" "}
        <span class="prank-class">Cloud computing</span> has also played a
        significant role in technology’s advancement, allowing{" "}
        <span class="prank-class">businesses</span> and{" "}
        <span class="prank-class">individuals</span> to store and access{" "}
        <span class="prank-class">data</span> remotely. Despite its many
        benefits, technology also presents{" "}
        <span class="prank-class">challenges</span>.{" "}
        <span class="prank-class">Cybersecurity threats</span>,{" "}
        <span class="prank-class">privacy concerns</span>, and the{" "}
        <span class="prank-class">ethical implications</span> of{" "}
        <span class="prank-class">AI</span> require careful consideration. As
        technology continues to evolve, society must strike a balance between{" "}
        <span class="prank-class">innovation</span> and{" "}
        <span class="prank-class">responsibility</span> to ensure a future where
        technology serves <span class="prank-class">humanity</span> positively.
        Looking ahead, the <span class="prank-class">future of technology</span>{" "}
        holds even more exciting possibilities.{" "}
        <span class="prank-class">Quantum computing</span>,{" "}
        <span class="prank-class">biotechnology</span>, and{" "}
        <span class="prank-class">space exploration</span> are just a few areas
        poised for breakthroughs. As we continue to push the limits of what is
        possible, one thing remains certain:{" "}
        <span class="prank-class">technology</span> will continue to shape the{" "}
        <span class="prank-class">world</span> in ways we can only begin to
        imagine.
      </p>

      <i>
        (Hint: Read line by line, something suspicious. Clue: Mouse is
        important.)
      </i>
      <div className="input-container">
        <input
          type="text"
          name="petName"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
          placeholder="Paste"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default PdfDecode;
