"use client";

import React, { useState, useEffect } from "react";
import { Club } from "@/lib/types";
import { toast } from "react-toastify";

interface RecruitmentDetailModalProps {
  club: Club | null;
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  motivation: string;
}

export default function RecruitmentDetailModal({
  club,
  isOpen,
  onClose,
}: RecruitmentDetailModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    motivation: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !club) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.position
    ) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }

    toast.success(
      `Ứng tuyển thành công vào vị trí ${formData.position} tại ${club.name}!`,
      {
        position: "top-right",
        autoClose: 3000,
      }
    );

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      motivation: "",
    });

    onClose();
  };

  const isClosed = club.recruitmentDeadline 
    ? Math.ceil((new Date(club.recruitmentDeadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) <= 0 
    : false;

  const totalQuota =
    club.recruitingPositions
      ?.reduce((sum, pos) => sum + (typeof pos === 'string' ? 0 : pos.quota), 0)
      ?.toString() || "0";

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 overflow-hidden pointer-events-none">
        <div
          className="bg-white rounded-xl max-w-2xl w-full my-8 max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl animate-in fade-in zoom-in duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-blue-200 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">{club.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-6 space-y-6">
            {/* Club Info Section */}
            <div>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                Thông tin tuyển dụng
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Tổng số vị trí</p>
                  <p className="text-gray-900 font-semibold">{totalQuota} vị trí</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Hạn chót ứng tuyển</p>
                  <p className={`font-semibold ${isClosed ? 'text-red-500' : 'text-gray-900'}`}>
                    {club.recruitmentDeadline
                      ? `${new Date(club.recruitmentDeadline).toLocaleDateString("vi-VN")}${isClosed ? " (Đã đóng)" : ""}`
                      : "Đang mở"}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Số lượng thành viên</p>
                  <p className="text-gray-900 font-semibold">{club.memberCount}+</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Tần suất họp mặt</p>
                  <p className="text-gray-900 font-semibold">
                    {club.meetingFrequency}
                  </p>
                </div>
              </div>
            </div>

            {/* Positions Section */}
            {club.recruitingPositions && club.recruitingPositions.length > 0 && (
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  Vị trí tuyển dụng
                </h3>
                <div className="space-y-2">
                  {club.recruitingPositions.map((position) => (
                    <div
                      key={typeof position === 'string' ? position : position.title}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <span className="text-sm font-medium text-gray-900">
                        {typeof position === 'string' ? position : position.title}
                      </span>
                      {typeof position !== 'string' && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {position.quota} vị trí
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Selection Stages */}
            {club.selectionStages && club.selectionStages.length > 0 && (
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  Quy trình tuyển lựa
                </h3>
                <div className="space-y-3">
                  {club.selectionStages.map((stage) => (
                    <div
                      key={stage.order}
                      className="flex gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                          {stage.order}
                        </div>
                        {stage.order < club.selectionStages!.length && (
                          <div className="w-0.5 h-8 bg-gray-300 mt-1"></div>
                        )}
                      </div>
                      <div className="pb-3">
                        <p className="text-sm font-semibold text-gray-900">
                          {stage.name}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Application Form */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                Hồ sơ ứng tuyển
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Nhập họ và tên"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0123456789"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Position Select */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Chọn vị trí ứng tuyển *
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">-- Chọn vị trí --</option>
                    {club.recruitingPositions?.map((position) => (
                      <option
                        key={typeof position === 'string' ? position : position.title}
                        value={typeof position === 'string' ? position : position.title}
                      >
                        {typeof position === 'string' ? position : position.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kinh nghiệm liên quan
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Mô tả kinh nghiệm hoặc kỹ năng liên quan..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  />
                </div>

                {/* Motivation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lý do ứng tuyển
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    placeholder="Tại sao bạn muốn tham gia câu lạc bộ này?"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  />
                </div>

                {/* Button Group */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    disabled={isClosed}
                    className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isClosed 
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {isClosed ? "Hết hạn" : "Ứng tuyển"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
