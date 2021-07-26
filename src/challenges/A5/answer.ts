/**
 * In this challenge, you should compute a week planning split in 1 hour slots
 * and including existing events. To keep it simple, don't work with Dates!
 * Be carefull with leading 0!
 * 
 * Example:
 * Input: [{ day: "Monday", startTime: "09:00", endTime: "11:00", name: "First work day!" }]
 * Output: [
 *     { day: "Monday", startTime: "00:00", "endTime": "01:00"},
 *     { day: "Monday", startTime: "01:00", "endTime": "02:00"},
 *     ...,
 *     { day: "Monday", startTime: "09:00", "endTime": "10:00", event: [Object] },
 *     { day: "Monday", startTime: "10:00", "endTime": "11:00", event: [Object] },
 *     { day: "Monday", startTime: "11:00", "endTime": "12:00" },
 *     ...,
 *     { day: "Sunday", startTime: "23:00", "endTime": "00:00" },
 * ] 
 * 
 * @param events List of event to add on the planning
 * @returns List of planning slots, from Monday 00:00 to Sunday 00:00, 1 hour each slot
 */

// ↓ uncomment bellow lines and add your response!
/* const planning = [
    { day: "Monday", startTime: "00:00", "endTime": "01:00"},
    { day: "Monday", startTime: "01:00", "endTime": "02:00"},
    { day: "Monday", startTime: "02:00", "endTime": "03:00"},
    { day: "Monday", startTime: "03:00", "endTime": "04:00"},
    { day: "Monday", startTime: "04:00", "endTime": "05:00"},
    { day: "Monday", startTime: "05:00", "endTime": "06:00"},
    { day: "Monday", startTime: "06:00", "endTime": "07:00"},
    { day: "Monday", startTime: "07:00", "endTime": "08:00"},
    { day: "Monday", startTime: "08:00", "endTime": "09:00"},
    { day: "Monday", startTime: "09:00", "endTime": "10:00"},
    { day: "Monday", startTime: "10:00", "endTime": "11:00"},
    { day: "Monday", startTime: "11:00", "endTime": "12:00"},
    { day: "Monday", startTime: "12:00", "endTime": "13:00"},
    { day: "Monday", startTime: "13:00", "endTime": "14:00"},
    { day: "Monday", startTime: "14:00", "endTime": "15:00"},
    { day: "Monday", startTime: "15:00", "endTime": "16:00"},
    { day: "Monday", startTime: "16:00", "endTime": "17:00"},
    { day: "Monday", startTime: "17:00", "endTime": "18:00"},
    { day: "Monday", startTime: "18:00", "endTime": "19:00"},
    { day: "Monday", startTime: "19:00", "endTime": "20:00"},
    { day: "Monday", startTime: "20:00", "endTime": "21:00"},
    { day: "Monday", startTime: "21:00", "endTime": "22:00"},
    { day: "Monday", startTime: "22:00", "endTime": "23:00"},

    { day: "Tuesday", startTime: "00:00", "endTime": "01:00"},
    { day: "Tuesday", startTime: "01:00", "endTime": "02:00"},
    { day: "Tuesday", startTime: "02:00", "endTime": "03:00"},
    { day: "Tuesday", startTime: "03:00", "endTime": "04:00"},
    { day: "Tuesday", startTime: "04:00", "endTime": "05:00"},
    { day: "Tuesday", startTime: "05:00", "endTime": "06:00"},
    { day: "Tuesday", startTime: "06:00", "endTime": "07:00"},
    { day: "Tuesday", startTime: "07:00", "endTime": "08:00"},
    { day: "Tuesday", startTime: "08:00", "endTime": "09:00"},
    { day: "Tuesday", startTime: "09:00", "endTime": "10:00"},
    { day: "Tuesday", startTime: "10:00", "endTime": "11:00"},
    { day: "Tuesday", startTime: "11:00", "endTime": "12:00"},
    { day: "Tuesday", startTime: "12:00", "endTime": "13:00"},
    { day: "Tuesday", startTime: "13:00", "endTime": "14:00"},
    { day: "Tuesday", startTime: "14:00", "endTime": "15:00"},
    { day: "Tuesday", startTime: "15:00", "endTime": "16:00"},
    { day: "Tuesday", startTime: "16:00", "endTime": "17:00"},
    { day: "Tuesday", startTime: "17:00", "endTime": "18:00"},
    { day: "Tuesday", startTime: "18:00", "endTime": "19:00"},
    { day: "Tuesday", startTime: "19:00", "endTime": "20:00"},
    { day: "Tuesday", startTime: "20:00", "endTime": "21:00"},
    { day: "Tuesday", startTime: "21:00", "endTime": "22:00"},
    { day: "Tuesday", startTime: "22:00", "endTime": "23:00"},

    { day: "Wednesday", startTime: "00:00", "endTime": "01:00"},
    { day: "Wednesday", startTime: "01:00", "endTime": "02:00"},
    { day: "Wednesday", startTime: "02:00", "endTime": "03:00"},
    { day: "Wednesday", startTime: "03:00", "endTime": "04:00"},
    { day: "Wednesday", startTime: "04:00", "endTime": "05:00"},
    { day: "Wednesday", startTime: "05:00", "endTime": "06:00"},
    { day: "Wednesday", startTime: "06:00", "endTime": "07:00"},
    { day: "Wednesday", startTime: "07:00", "endTime": "08:00"},
    { day: "Wednesday", startTime: "08:00", "endTime": "09:00"},
    { day: "Wednesday", startTime: "09:00", "endTime": "10:00"},
    { day: "Wednesday", startTime: "10:00", "endTime": "11:00"},
    { day: "Wednesday", startTime: "11:00", "endTime": "12:00"},
    { day: "Wednesday", startTime: "12:00", "endTime": "13:00"},
    { day: "Wednesday", startTime: "13:00", "endTime": "14:00"},
    { day: "Wednesday", startTime: "14:00", "endTime": "15:00"},
    { day: "Wednesday", startTime: "15:00", "endTime": "16:00"},
    { day: "Wednesday", startTime: "16:00", "endTime": "17:00"},
    { day: "Wednesday", startTime: "17:00", "endTime": "18:00"},
    { day: "Wednesday", startTime: "18:00", "endTime": "19:00"},
    { day: "Wednesday", startTime: "19:00", "endTime": "20:00"},
    { day: "Wednesday", startTime: "20:00", "endTime": "21:00"},
    { day: "Wednesday", startTime: "21:00", "endTime": "22:00"},
    { day: "Wednesday", startTime: "22:00", "endTime": "23:00"},

    { day: "Thursday", startTime: "00:00", "endTime": "01:00"},
    { day: "Thursday", startTime: "01:00", "endTime": "02:00"},
    { day: "Thursday", startTime: "02:00", "endTime": "03:00"},
    { day: "Thursday", startTime: "03:00", "endTime": "04:00"},
    { day: "Thursday", startTime: "04:00", "endTime": "05:00"},
    { day: "Thursday", startTime: "05:00", "endTime": "06:00"},
    { day: "Thursday", startTime: "06:00", "endTime": "07:00"},
    { day: "Thursday", startTime: "07:00", "endTime": "08:00"},
    { day: "Thursday", startTime: "08:00", "endTime": "09:00"},
    { day: "Thursday", startTime: "09:00", "endTime": "10:00"},
    { day: "Thursday", startTime: "10:00", "endTime": "11:00"},
    { day: "Thursday", startTime: "11:00", "endTime": "12:00"},
    { day: "Thursday", startTime: "12:00", "endTime": "13:00"},
    { day: "Thursday", startTime: "13:00", "endTime": "14:00"},
    { day: "Thursday", startTime: "14:00", "endTime": "15:00"},
    { day: "Thursday", startTime: "15:00", "endTime": "16:00"},
    { day: "Thursday", startTime: "16:00", "endTime": "17:00"},
    { day: "Thursday", startTime: "17:00", "endTime": "18:00"},
    { day: "Thursday", startTime: "18:00", "endTime": "19:00"},
    { day: "Thursday", startTime: "19:00", "endTime": "20:00"},
    { day: "Thursday", startTime: "20:00", "endTime": "21:00"},
    { day: "Thursday", startTime: "21:00", "endTime": "22:00"},
    { day: "Thursday", startTime: "22:00", "endTime": "23:00"},

    { day: "Friday", startTime: "00:00", "endTime": "01:00"},
    { day: "Friday", startTime: "01:00", "endTime": "02:00"},
    { day: "Friday", startTime: "02:00", "endTime": "03:00"},
    { day: "Friday", startTime: "03:00", "endTime": "04:00"},
    { day: "Friday", startTime: "04:00", "endTime": "05:00"},
    { day: "Friday", startTime: "05:00", "endTime": "06:00"},
    { day: "Friday", startTime: "06:00", "endTime": "07:00"},
    { day: "Friday", startTime: "07:00", "endTime": "08:00"},
    { day: "Friday", startTime: "08:00", "endTime": "09:00"},
    { day: "Friday", startTime: "09:00", "endTime": "10:00"},
    { day: "Friday", startTime: "10:00", "endTime": "11:00"},
    { day: "Friday", startTime: "11:00", "endTime": "12:00"},
    { day: "Friday", startTime: "12:00", "endTime": "13:00"},
    { day: "Friday", startTime: "13:00", "endTime": "14:00"},
    { day: "Friday", startTime: "14:00", "endTime": "15:00"},
    { day: "Friday", startTime: "15:00", "endTime": "16:00"},
    { day: "Friday", startTime: "16:00", "endTime": "17:00"},
    { day: "Friday", startTime: "17:00", "endTime": "18:00"},
    { day: "Friday", startTime: "18:00", "endTime": "19:00"},
    { day: "Friday", startTime: "19:00", "endTime": "20:00"},
    { day: "Friday", startTime: "20:00", "endTime": "21:00"},
    { day: "Friday", startTime: "21:00", "endTime": "22:00"},
    { day: "Friday", startTime: "22:00", "endTime": "23:00"},

    { day: "Saturday", startTime: "00:00", "endTime": "01:00"},
    { day: "Saturday", startTime: "01:00", "endTime": "02:00"},
    { day: "Saturday", startTime: "02:00", "endTime": "03:00"},
    { day: "Saturday", startTime: "03:00", "endTime": "04:00"},
    { day: "Saturday", startTime: "04:00", "endTime": "05:00"},
    { day: "Saturday", startTime: "05:00", "endTime": "06:00"},
    { day: "Saturday", startTime: "06:00", "endTime": "07:00"},
    { day: "Saturday", startTime: "07:00", "endTime": "08:00"},
    { day: "Saturday", startTime: "08:00", "endTime": "09:00"},
    { day: "Saturday", startTime: "09:00", "endTime": "10:00"},
    { day: "Saturday", startTime: "10:00", "endTime": "11:00"},
    { day: "Saturday", startTime: "11:00", "endTime": "12:00"},
    { day: "Saturday", startTime: "12:00", "endTime": "13:00"},
    { day: "Saturday", startTime: "13:00", "endTime": "14:00"},
    { day: "Saturday", startTime: "14:00", "endTime": "15:00"},
    { day: "Saturday", startTime: "15:00", "endTime": "16:00"},
    { day: "Saturday", startTime: "16:00", "endTime": "17:00"},
    { day: "Saturday", startTime: "17:00", "endTime": "18:00"},
    { day: "Saturday", startTime: "18:00", "endTime": "19:00"},
    { day: "Saturday", startTime: "19:00", "endTime": "20:00"},
    { day: "Saturday", startTime: "20:00", "endTime": "21:00"},
    { day: "Saturday", startTime: "21:00", "endTime": "22:00"},
    { day: "Saturday", startTime: "22:00", "endTime": "23:00"},

    { day: "Sunday", startTime: "00:00", "endTime": "01:00"},
    { day: "Sunday", startTime: "01:00", "endTime": "02:00"},
    { day: "Sunday", startTime: "02:00", "endTime": "03:00"},
    { day: "Sunday", startTime: "03:00", "endTime": "04:00"},
    { day: "Sunday", startTime: "04:00", "endTime": "05:00"},
    { day: "Sunday", startTime: "05:00", "endTime": "06:00"},
    { day: "Sunday", startTime: "06:00", "endTime": "07:00"},
    { day: "Sunday", startTime: "07:00", "endTime": "08:00"},
    { day: "Sunday", startTime: "08:00", "endTime": "09:00"},
    { day: "Sunday", startTime: "09:00", "endTime": "10:00"},
    { day: "Sunday", startTime: "10:00", "endTime": "11:00"},
    { day: "Sunday", startTime: "11:00", "endTime": "12:00"},
    { day: "Sunday", startTime: "12:00", "endTime": "13:00"},
    { day: "Sunday", startTime: "13:00", "endTime": "14:00"},
    { day: "Sunday", startTime: "14:00", "endTime": "15:00"},
    { day: "Sunday", startTime: "15:00", "endTime": "16:00"},
    { day: "Sunday", startTime: "16:00", "endTime": "17:00"},
    { day: "Sunday", startTime: "17:00", "endTime": "18:00"},
    { day: "Sunday", startTime: "18:00", "endTime": "19:00"},
    { day: "Sunday", startTime: "19:00", "endTime": "20:00"},
    { day: "Sunday", startTime: "20:00", "endTime": "21:00"},
    { day: "Sunday", startTime: "21:00", "endTime": "22:00"},
    { day: "Sunday", startTime: "22:00", "endTime": "23:00"},
]

export default function ({ events }: { events: Event[] }): PlanningSlot[] {
    const slots:any = [];
    events.map((e:Event) => {
        // console.log("event", e);
        planning.map((slot:PlanningSlot) => {
            console.log("slot", slot);
            if (
                e.day === slot.day &&
                e.startTime === slot.startTime && 
                e.endTime === slot.endTime
            ) {
                const eventAdded = {...slot, "event": e};
                // console.log(eventAdded);
                slots.push(eventAdded);
            } else {
                // console.log(slot);
                slots.push(slot);
            }
            // console.log(slots);
        })
    })
    return [];
} */


// used interfaces, do not touch
export interface Event {
    day: string;
    startTime: string;
    endTime: string;
    name: string;
}

export interface PlanningSlot {
    day: string;
    startTime: string;
    endTime: string;
    event?: Event;
}