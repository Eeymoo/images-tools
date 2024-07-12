'use client';

import { useState } from "react";

export default function Home() {
  const [config, setConfig] = useState({
    quality: 40
  });
  const [images, setImages] = useState<File[]>([]);

  return (
    <main className="flex flex-col relative overflow-x-auto h-screen">
      {/* 导航 */}
      <div className="navbar bg-base-100 shadow-xl">
        <div className="container mx-auto">
          <div className="flex-1">
            <a href="/" className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a href="https://github.com/Eeymoo/images-tools">Github</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container h-64 grow card glass card-side bg-base-100 shadow-xl flex p-16 mx-auto my-8">
        {/* 图片操作区 */}
        <div className="grow h-full w-auto mr-8 overflow-auto">
          <div className="flex flex-row flex-wrap mx-auto justify-around">
            {
              images.map(image => {
                return (
                  <div
                    key={image.name}
                    id={image.name}
                    className="flex bg-slate-100 size-48 rounded-lg m-3 bg-cover p-2 flex-wrap"
                    style={{
                      backgroundImage: `url(${URL.createObjectURL(image)})`,
                    }}
                  >
                    <input type="checkbox" checked className="checkbox" />
                    <button className="btn btn-primary btn-xs self-end">删除</button>
                  </div>
                )
              })
            }
            {
                images.length === 0 && <div className="h-full w-full flex items-center justify-center font-bold text-4xl">请上传图片</div>
            }
          </div>
        </div>
        {/* 参数调整区 */}
        <div className="card bg-white flex flex-col justify-center items-center w-xs p-8">
          <label className="form-control w-full max-w-xs mb-2">
            <input type="file" multiple className="file-input file-input-bordered w-full max-w-xs" onChange={e => setImages([...images, ...e.target.files])}/>
            <div className="label">
              <span className="label-text-alt">可以上传一个或者多个文件</span>
            </div>
          </label>
          <label className="form-control w-full max-w-xs mb-2">
            <input type="range" min={0} max="100" value={config.quality} onChange={e => setConfig({ ...config, quality: e.target.value })} className="range" />
            <div className="label">
              <span className="label-text-alt">压缩百分比</span>
              <span className="label-text-alt input input-ghost input-xs -mr-1 w-24">
                <input type="text" placeholder="压缩百分比" value={config.quality} onChange={e => setConfig({ ...config, quality: e.target.value })} className="w-5/6 text-right" />
                <span className="w-1/6">%</span>
              </span>
            </div>
          </label>
          <label className="form-control w-full max-w-xs mb-2">
            <label className="input input-bordered flex items-center grow">
                W
                <input type="text" className="grow mx-2" placeholder="Wight" />
                px
              </label>
          </label>
          <label className="form-control w-full max-w-xs mb-2">
            <label className="input join-item input-bordered flex items-center">
              H
              <input type="text" className="grow mx-2" placeholder="Height" />
              px
            </label>
            <div className="label">
              <span className="label-text-alt">重新设置宽高</span>
            </div>
          </label>
          <label className="form-control w-full max-w-xs mb-2">
            <label className="input join-item input-bordered flex items-center">
              Size
              <input type="text" className="grow mx-2" placeholder="Height" />
              KB
            </label>
            <div className="label">
              <span className="label-text-alt">与实际存在差异但始终小于此值</span>
            </div>
          </label>
          <label className="form-control w-full max-w-xs">
            <select className="select select-bordered">
              <option selected>原始格式</option>
              <option>jpg</option>
              <option>png</option>
              <option>webp</option>
              <option>jpgp</option>
            </select>
            <div className="label">
              <span className="label-text-alt">Alt label</span>
            </div>
          </label>
          <button className="btn w-full btn-neutral">压缩</button>
        </div>
      </div>
      {/* 页脚 */}
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © ${new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </main>
  );
}
