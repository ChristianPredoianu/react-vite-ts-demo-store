import { useState } from 'react';

export function useModal(
  initialState: boolean
): [boolean, () => void, () => void] {
  const [isModalOpen, setIsModalOpen] = useState(initialState);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return [isModalOpen, openModal, closeModal];
}
