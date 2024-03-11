import AIDSData from "./faculty/AIDS/AIDS_faculty"
import AIMLData from "./faculty/AIML/AIML_faculty"
import BTData from "./faculty/BT/BT_faculty"
import CCEData from "./faculty/CCE/CCE_faculty"
import CivilData from "./faculty/civil/CV_faculty"
import CSEData from "./faculty/CSE/CSE_faculty"
import cybersecurityData from "./faculty/cyber-security/cyber_security_faculty"
import ECEData from "./faculty/ECE/ECE_faculty"
import EEEData from "./faculty/EEE/EEE_faculty"
import ISData from "./faculty/IS/IS_faculty"
import MechData from "./faculty/Mech/Mech_faculty"
import RoboticsData from "./faculty/Robotics/Robotics_faculty"
/*
const facultyData: {
  name: string
  img_src: string
  designation: string
  info: Record<string, string>[]
}[] = Array.prototype.concat.apply([], [AIDSData , AIMLData , BTData , CCEData , CivilData , CSEData , cybersecurityData , ECEData , EEEData , ISData , MechData , RoboticsData])
*/
const faculty:Record<string, {
  name: string
  img_src: string
  designation: string
  info: Array<Record<string, string>>
}[]> = {
  "Artificial Intelligence and Data Science": AIDSData,
  "Artificial Intelligence and Machine Learning": AIMLData,
  "Biotechnology": BTData,
  "Computer and Communication Engineering": CCEData,
  "Civil Engineering": CivilData,
  "Computer Science and Engineering": CSEData,
  "Computer Science Cyber Security": cybersecurityData,
  "Electronics and Communication Engineering": ECEData,
  "Electrical and Electronics Engineering": EEEData,
  "Information Science and Engineering": ISData,
  "Mechanical Engineering": MechData,
  "Robotics and Automation": RoboticsData
}

// export facultyData;
export default faculty;
