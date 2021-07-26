/**
 * In this challenge, you must sort students by their age (younger first). If some of them have
 * the same age, then you should sort them alphabetically (A to Z)
 * 
 * @param students Unsorted list of students
 * @returns Sorted list of students
 */

// ↓ uncomment bellow lines and add your response!
// export default function ({ students }: { students: Student[] }): Student[] {
//     const sorted = students.sort((s1, s2):any => {
//         if (s1.age === s2.age) {
//             return s1.name > s2.name ? 1 : -1;
//         } else {
//             return s1.age - s2.age;
//         }
//     });
//     return sorted;
// }

// used interfaces, do not touch
export interface Student {
    name: string;
    age: number;
    skills: string[];
}