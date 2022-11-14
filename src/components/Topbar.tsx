import { A } from '@solidjs/router'
import { Component, For, lazy } from 'solid-js'
import './Topbar.css'

export interface TopbarProps {
  links: TopbarLink[]
}

export interface TopbarLink {
  label: string
  url: string
}

export interface TopbarButton {
  icon: Component
  onClick: () => void
}

export function Topbar(props: TopbarProps) {
  return (
    <div class="topbar">
      <nav class="topbar-links">
        <For each={props.links}>
          {(link) => {
            return (
              <A class="topbar-link" href={link.url}>
                {link.label}
              </A>
            )
          }}
        </For>
      </nav>
    </div>
  )
}
