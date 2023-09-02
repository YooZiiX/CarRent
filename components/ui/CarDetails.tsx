"use client";
import { CarProps } from "@/types";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal?: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return <div>CarDetails</div>;
};

export default CarDetails;
