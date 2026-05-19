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
                <p>Dear readers,</p>
                <p>Three months ago, when the University announced that it would break from tradition and relocate its Universitywide Commencement ceremony from the Morningside campus to Baker Athletics Complex, the senior class used its voice. Organizing meetings with senior administrators, members of the class of 2026 advocated for their peers and, before long, the decision was reversed. While seemingly insignificant among the long list of challenges the class of 2026 has faced—from the mass arrests of their classmates to heightened federal scrutiny on their community—their instinct to speak up in a moment of discontent reflects a skill they have developed over these last four years: adaptation.</p>
                <p>The class of 2026 entered a campus dissimilar from the one it is set to leave today. The campus gates were open to all neighbors and visitors, and the University president had been in the seat for over two decades. That stability, however, would soon become unfamiliar. In its second year, as protests over the war in Gaza erupted on campus, a new president would both enter and exit Low Library, beginning a period of constant administrative turnover that would lead the class to see four presidents in its four years. The campus protests ushered in an era of instability and institutional transformation, including the continued closure of the campus gates, but their ability to navigate this tumult only proved the unique perseverance of the class of 2026. As their last year saw the fallout of Columbia’s recent crises, including crackdowns on free expression and controversial administrative decisions, the class of 2026 has never failed to use its voice, even as it has become increasingly difficult to speak up. </p>
                <p>This special edition honors the exemplary passion and impactful work of this class and the Columbia community more broadly. From features on seniors who revived long-standing institutions or founded innovative startups, to articles on the ways in which this class continues to use its voice, protesting against the use of AI in this year’s Class Days ceremony, to words of wisdom from Spectator’s graduating seniors, we hope you are as grateful as we are for the dedication of the class of 2026. </p>
                <p>Our sincere congratulations,</p>
                <p>Tsehai Alfred, editor in chief and president</p>
                <p>Manuela Moreyra, managing editor and vice president</p>
            </div>
        </div>
    </div>
    )
}