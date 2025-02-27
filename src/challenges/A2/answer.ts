/**
 * In this challenge, you have to add a list of skills to each group (based on 
 * students skills in the group). Duplicates skills for one group is not permitted. Skills must be
 * sorted alphabatically. Groups order, students order and students skills order must remain
 * untouched.
 * 
 * @param groups List of groups without skills, but with students
 * @returns List of groups with a new prop skills
 */

import { group } from "console";

// ↓ uncomment bellow lines and add your response!
// export default function ({ groups }: { groups: Group[] }): GroupWithSills[] {
//     return groups.map((gr:Group):GroupWithSills => {
//         let skills:string[] = [];
//         gr.students.forEach((student) => {
//             skills = [...skills, ...student.skills];
//         });

//         skills.sort();

//         const myGroup:GroupWithSills = {...gr, skills: Array.from(new Set(skills))}
//         return myGroup;
//     })
// }

// used interfaces, do not touch
interface Student {
    name: string;
    age: number;
    skills: string[];
}

export interface Group {
    students: Student[];
    name: string;
    skills: string[]
}

export interface GroupWithSills extends Group {
    skills: string[];
}