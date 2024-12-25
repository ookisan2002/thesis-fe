import {type ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'
import {format, parse} from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface postFetcherProps {
  url: string
  data: FormData
  header?: any
}

interface fetcherProps {
  url: string
  header?: any
}

export const getFetcher = async ({url, header = {}}: fetcherProps) =>
  await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...header,
    },
  })
    .then((r: any) => {
      if (r.status === 404) {
        const error = new Error(`Not found!! ${r.statusText}`)
        throw error
      }

      return r.json()
    })
    // eslint-disable-next-line no-console
    .catch((error: any) => console.log(error.message))

export const deleteFetcher = async ({url, header = {}}: fetcherProps) =>
  await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...header,
    },
  })
    .then((r: any) => {
      if (r.status === 404) {
        const error = new Error(`Not found!! ${r.statusText}`)
        throw error
      }

      return r.json()
    })
    // eslint-disable-next-line no-console
    .catch((error: any) => console.log(error.message))

export const postFetcher = async ({url, data, header = {}}: postFetcherProps) =>
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...header,
    },
    body: JSON.stringify(data),
  })
    .then((r: any) => {
      if (r.status === 404) {
        const error = new Error(`Not found!! ${r.statusText}`)
        throw error
      }

      return r.json()
    })
    // eslint-disable-next-line no-console
    .catch((error: any) => console.log(error.message))

export function toQueryString(params?: Record<string, any>): string {
  const queryString = params
    ? Object.keys(params)
        .filter(
          (key) =>
            params[key] !== undefined &&
            params[key] !== null &&
            params[key] !== '',
        )
        .map((key) => `${key}=${params[key]}`)
        .join('&')
    : ''
  return `${queryString}`
}

export function formatDate(dateString: string) {
  const date = parse(dateString, 'HH:mm:ss dd-MM-yyyy', new Date())
  return format(date, 'dd-MM-yyyy')
}

export function formatDateToTimeStamp(dateString: any) {
  if (!dateString) {
    return ''
  }
  const date = new Date(dateString)

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // Tháng bắt đầu từ 0
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  const milliseconds = String(date.getMilliseconds()).padStart(3, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`
}

export const lineChartOptionsTotalSpentGen = (xAxis: string[]) => {
  return {
    legend: {
      show: false,
    },

    theme: {
      mode: 'light',
    },
    chart: {
      type: 'line',

      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },

    tooltip: {
      style: {
        fontSize: '12px',
        fontFamily: undefined,
        backgroundColor: '#000000',
      },
      theme: 'dark',
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: '#A3AED0',
          fontSize: '12px',
          fontWeight: '500',
        },
      },
      type: 'text',
      range: undefined,
      categories: xAxis,
    },

    yaxis: {
      show: false,
      min: 0,
    },
  }
}

export const barChartOptionsRevenueGen = (xAxis: string[]) => {
  return {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    // colors:['#ff3322','#faf']
    tooltip: {
      style: {
        fontSize: '0.75rem',
        fontFamily: undefined,
        backgroundColor: '#000000',
      },
      theme: 'dark',
      onDatasetHover: {
        style: {
          fontSize: '0.75rem',
          fontFamily: undefined,
        },
      },
    },
    xaxis: {
      categories: xAxis,
      show: false,
      labels: {
        show: true,
        style: {
          colors: '#A3AED0',
          fontSize: '0.875rem',
          fontWeight: '500',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      color: 'black',
      labels: {
        show: false,
        style: {
          colors: '#A3AED0',
          fontSize: '0.875rem',
          fontWeight: '500',
        },
      },
    },

    grid: {
      borderColor: 'rgba(163, 174, 208, 0.3)',
      show: true,
      yaxis: {
        lines: {
          show: false,
          opacity: 0.5,
        },
      },
      row: {
        opacity: 0.5,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      type: 'solid',
      colors: ['#5E37FF', '#6AD2FF', '#E1E9F8'],
    },
    legend: {
      show: false,
    },
    colors: ['#5E37FF', '#6AD2FF', '#E1E9F8'],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: '20px',
      },
    },
  }
}

// eslint-disable-next-line no-unused-vars
export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  ms = 300,
) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

export const renderPagination = function ({
  totalPages = 10,
  currentPage = 1,
  setCurrentPage,
  paginationControl,
}: {
  totalPages: number
  currentPage: number
  // eslint-disable-next-line no-unused-vars
  setCurrentPage: (i: number) => void
  paginationControl: HTMLElement
}) {
  const paginationControls = paginationControl.querySelector(
    '#pagination-controls',
  )
  if (paginationControls) {
    paginationControls.innerHTML = ''
    for (let i: number = 1; i <= totalPages; i++) {
      if (
        i <= 3 ||
        i > totalPages - 1 ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        const button = document.createElement('button')
        button.textContent = i + ''
        button.classList.add('page-btn')
        button.addEventListener('click', () => {
          setCurrentPage(i)
        })
        if (i === currentPage) {
          button.classList.add('active')
        }
        paginationControls.appendChild(button)
      } else if (i === 4) {
        const dot = document.createElement('span')
        dot.textContent = '...'
        paginationControls.appendChild(dot)
      } else if (i === currentPage + 2 && currentPage < totalPages - 1) {
        const dot = document.createElement('span')
        dot.textContent = '...'
        paginationControls.appendChild(dot)
      }
    }
  }
}

export async function logout() {
  try {
    const response = await fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const payload = await response.json()
    const data = {
      status: response.status,
      payload,
    }

    if (!response.ok) {
      throw data
    }

    window.location.href = '/'
  } catch (error) {
    throw error
  }
}
