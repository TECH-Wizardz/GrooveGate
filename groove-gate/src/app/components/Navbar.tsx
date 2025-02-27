"use client";

import Image from "next/image";
import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import { formatAddress } from "@/app/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Navbar() {
  const { address, isConnected, chain } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain, chains } = useSwitchChain();

  const [isChainMenuOpen, setIsChainMenuOpen] = useState(false);
  const [isAddressMenuOpen, setIsAddressMenuOpen] = useState(false);
  const chainMenuRef = useRef<HTMLElement | null>(null);
  const addressMenuRef = useRef<HTMLElement | null>(null);

  const connector = connectors[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        chainMenuRef.current &&
        !chainMenuRef.current.contains(event.target)
      ) {
        setIsChainMenuOpen(false);
      }
      if (
        addressMenuRef.current &&
        !addressMenuRef.current.contains(event.target)
      ) {
        setIsAddressMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Custom button component
  const CustomButton = ({ onClick, children, className }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-semibold transition-colors ${className}`}
    >
      {children}
    </button>
  );

  // Custom dropdown component
  const CustomDropdown = ({
    isOpen,
    toggleOpen,
    triggerContent,
    menuItems,
    triggerClassName,
    menuClassName,
    contentClassName,
    ref,
  }) => (
    <div className="relative" ref={ref}>
      <button
        onClick={() => toggleOpen(!isOpen)}
        className={`bg-white h-fit flex items-center gap-1 py-2 rounded-2xl font-semibold ${triggerClassName}`}
      >
        {triggerContent} <ChevronDown />
      </button>

      {isOpen && (
        <div
          className={`absolute mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg z-10 overflow-hidden ${menuClassName}`}
        >
          <div className={`w-full py-1 ${contentClassName}`}>{menuItems}</div>
        </div>
      )}
    </div>
  );

  return (
    <nav className="flex w-full px-3 md:px-0 h-fit py-10 justify-between items-center">
      <Image
        src="/metamask-logo.svg"
        alt="Metamask Logo"
        width={180}
        height={180}
      />

      {isConnected ? (
        <div className="flex flex-col md:flex-row gap-2">
          <CustomDropdown
            isOpen={isChainMenuOpen}
            toggleOpen={setIsChainMenuOpen}
            triggerContent={chain?.name.split(" ").slice(0, 2).join(" ")}
            triggerClassName="md:px-3"
            menuClassName="min-w-[150px] right-0"
            ref={chainMenuRef}
            menuItems={
              <>
                {chains.map(
                  (c) =>
                    c.id !== chain?.id && (
                      <div
                        key={c.id}
                        onClick={() => {
                          switchChain({ chainId: c.id });
                          setIsChainMenuOpen(false);
                        }}
                        className="cursor-pointer w-full px-4 py-2 hover:bg-gray-100 flex justify-center rounded-2xl font-semibold"
                      >
                        {c.name}
                      </div>
                    )
                )}
              </>
            }
          />

          <CustomDropdown
            isOpen={isAddressMenuOpen}
            toggleOpen={setIsAddressMenuOpen}
            triggerContent={formatAddress(address)}
            triggerClassName="px-7"
            menuClassName="min-w-[150px] right-0"
            ref={addressMenuRef}
            menuItems={
              <div
                onClick={() => {
                  disconnect();
                  setIsAddressMenuOpen(false);
                }}
                className="text-red-400 cursor-pointer w-full px-4 py-2 hover:bg-gray-100 flex justify-center rounded-2xl font-semibold"
              >
                Disconnect
              </div>
            }
          />
        </div>
      ) : (
        <CustomButton
          onClick={() => connect({ connector })}
          className="bg-blue-500 text-white hover:bg-blue-600 shadow-xl md:px-10"
        >
          Connect Wallet
        </CustomButton>
      )}
    </nav>
  );
}
