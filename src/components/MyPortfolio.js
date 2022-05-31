import React from "react";
import hasan from "../Image/products/hasan1.jpg";
import html from "../Image/technology/html.png";
import css from "../Image/technology/css.png";
import js from "../Image/technology/js.png";
import react from "../Image/technology/react.png";
import node1 from "../Image/technology/node.png";
import express from "../Image/technology/express.png";
import mongo from "../Image/technology/mongodb.png";
import boot from "../Image/technology/bootstrap.png";
import tailwind from "../Image/technology/Tailwind.png";
import jwt from "../Image/technology/jwt.png";
import firebase from "../Image/technology/firebase.png";
import project1 from "../Image/project1.png";
import project2 from "../Image/project2.png";
import project3 from "../Image/project3.png";

const MyPortfolio = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly">
        <div class="m-10 lg:card-side  shadow-xl w-2/5">
          <figure>
            <img className="" src={hasan} />
          </figure>
          <div class="card-body w-[300px]">
            <h2 class="card-title">Hi! This is Hasan Mohammad</h2>
            <p>Email: hasan.md.east@gmail.com</p>
            <p>Educational Background: BBA (Southeast University)</p>
          </div>
        </div>
        <div class="overflow-x-auto w-full m-10">
          <table class="table">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>List of technology</th>
              </tr>
            </thead>
            <tbody className="grid grid-cols-2 md:grid-cols-3">
              {/* <!-- row 1 --> */}
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src={html} />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">HTML</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src={css} />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">CSS</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src={js} />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">JavaScript</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src={react} />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">React</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src={node1} />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">Node</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src={express} />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">Express</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src={mongo} />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">MongoDB</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src={boot} />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">Bootstrap</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src={tailwind} />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">Tailwind</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src={jwt} />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">JWT</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img src={firebase} />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">Firebase</div>
                    </div>
                  </div>
                </td>
              </tr>
              {/* end */}
            </tbody>
            {/* <!-- foot --> */}
            <tfoot>
              <tr>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <h2 className="text-center text-3xl">My Projects</h2>
      <div className="line w-24 mx-auto mt-1 mb-16"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div class="card w-full  shadow-xl">
          <figure>
            <img src={project1} alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Dhaka Bakery</h2>

            <div class="card-actions justify-end">
              <button class="btn-1"><a href="https://dazzling-salamander-69a1cb.netlify.app/">Project Link</a></button>
            </div>
          </div>
        </div>
        {/*  */}
        <div class="card w-full  shadow-xl">
          <figure>
            <img src={project2} alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Falcon Pic</h2>
            <div class="card-actions justify-end">
              <button class="btn-1"><a href="https://photography-web-app-58ab5.web.app/">Project Link</a></button>
            </div>
          </div>
        </div>
        {/*  */}
        <div class="card w-full  shadow-xl">
          <figure>
            <img src={project3} alt="Album" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Lara Convention Center</h2>
            <div class="card-actions justify-end">
              <button class="btn-1"><a href="https://clever-panini-6510be.netlify.app/">Project Link</a></button>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default MyPortfolio;
