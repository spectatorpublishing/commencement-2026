import "./LetterFromEditor.css"
import Bouquet from "~/assets/Bouquet.png"
import CommencementLetter from "~/assets/Commencement-Edition-Letter.png"
import SpecLogo from "~/assets/Spec-Logo.png"
import LinesBackground from "~/assets/Lines-Background.png"


export default function LetterFromEditor() {
    return (
    <div className="letter-page">
        <div className = "left-side">
            <img src={Bouquet} alt = "bouquet" />
            <img src={CommencementLetter} alt = "commencement letter" />
        </div>
        <div className = "right-side">
            <div className = "letter-box">
                <div className = "letter-header">
                    <h2>Letter From the Editor</h2>
                    <img src={SpecLogo} alt = "spec logo" />
                </div>
                <p>Dear Readers,</p>
                <p>Over the past three years, Columbia has seen an unprecedented turnover in University leadership. Since former University President Lee Bollinger, Law ’71, announced he was stepping down from his two-decade tenure in 2022, Columbia has cycled through three other presidents. As former University President Minouche Shafik, former interim University President Katrina Armstrong, and acting University President Claire Shipman, CC ’86, SIPA ’94, stepped through Low Library’s revolving doors, Columbia simultaneously assumed center stage in national attacks on higher education.</p>
                <p>During this era of instability, the University has handled intense crises—historic campus protests over the war in Gaza, resulting in arrests and drastic disciplinary action against hundreds of students, the cancellation of $400 million in federal funds, and the acquiescence to dozens of demands from President Donald Trump’s administration in an attempt to restore the consequential allocations.</p>
                <p>Sincerely,</p>
                <p>Tsehai Alfred, editor in chief and president</p>
            </div>
        </div>
    </div>
    )
}