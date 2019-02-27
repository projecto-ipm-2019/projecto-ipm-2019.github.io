import React from 'react';
import { Photo } from "../../Components/Photo/Photo"
import photo79718 from "./images/79718.jpg"

const style = {
  column : {
    maxWidth: 300,
  }
};

const members = [
  {
    name: "André Santos",
    student_number: 79718,
    photo_src: photo79718
  }
];

export const Photoframe = () => (
  <div>
    <table>
      <tbody>
        <tr>
          {
            members.map(
              ({name, student_number, photo_src}) => (
                <td
                  key={student_number}
                >
                  <div
                    style={style.column}
                  >
                    <div>
                      {name}
                    </div>
                    <div>
                      {student_number}
                    </div>
                    <div>
                      <Photo
                        alt={student_number}
                        src={photo_src}
                      />
                    </div>
                  </div>
                </td>
              )
            )
          }
        </tr>
      </tbody>
    </table>
  </div>
);