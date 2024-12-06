'use client'

import { useState, useEffect, useRef } from 'react'
import { Modal } from 'bootstrap'

export default function MyModal() {
  // 記錄 Modal 實例
  const [modalInstance, setModalInstance] = useState(null)
  // Modal 的 DOM ref
  const modalRef = useRef(null)

  // didMount 時初始化 Modal 實例，記錄在 state 中
  useEffect(() => {
    const modal = new Modal(modalRef.current)
    setModalInstance(modal)
  }, [])

  return (
    <>
      <button
        onClick={() => {
          // 透過 state 中的 Modal 實例來操作 Modal
          modalInstance.show()
        }}
      >
        Show Modal
      </button>
      <div className="modal" tabIndex="-1" ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
