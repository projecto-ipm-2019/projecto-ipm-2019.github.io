import React from 'react';
import { Photo } from "../../Components/Photo/Photo"
import photo79718 from "./images/79718.jpg"
import photo83500 from  "./images/83500.jpg"

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
  },
  {
    name: "Luis Ferreira",
    student_number: 83500,
    photo_src: photo83500
  }
];

export const Photoframe = () => (
  <div>
    <table>
      <tbody>
      {
        members.map(({name, student_number, photo_src}) => (
          <td>
            <div
              style={style.column}
            >
              <Photo
                src={photo_src}
              />
              <br/>
              {name}
              <br/>
              {student_number}
            </div>
          </td>
        ))
      }
      </tbody>
    </table>
  </div>
);
